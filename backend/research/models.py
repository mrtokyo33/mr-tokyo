from django.db import models
from django.conf import settings
from django.utils.text import slugify
from .constants import TITLE_MAX_LENGTH, DEFAULT_SLUG_TEXT
from .services import LatexProcessor
from .validators import validate_latex_file

class Article(models.Model):
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    slug = models.SlugField(unique=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    title = models.CharField(max_length=TITLE_MAX_LENGTH, blank=True)
    
    tex_file = models.FileField(
        upload_to='tex_sources/',
        validators=[validate_latex_file]
    )
    
    html_content = models.TextField(blank=True, editable=False)
    metadata = models.JSONField(default=dict, blank=True)

    def save(self, *args, **kwargs):
        if self.tex_file and not self.html_content:
            self._process_latex_file()
        
        if not self.slug:
            base_text = self.title or (self.tex_file.name if self.tex_file else DEFAULT_SLUG_TEXT)
            self.slug = slugify(base_text)

        super().save(*args, **kwargs)

    def _process_latex_file(self):
        try:
            self.tex_file.open('r')
            content_bytes = self.tex_file.read()
            
            if isinstance(content_bytes, bytes):
                latex_source = content_bytes.decode('utf-8')
            else:
                latex_source = content_bytes
            
            self.tex_file.seek(0)

            extracted_meta = LatexProcessor.extract_metadata(latex_source)
            if 'title' in extracted_meta:
                self.title = extracted_meta['title']
            self.metadata = extracted_meta

            self.html_content = LatexProcessor.convert_to_html(latex_source)

        except Exception as e:
            print(f"⚠️ Critical error processing LaTeX: {e}")

    def __str__(self):
        return self.title or "Untitled Article"