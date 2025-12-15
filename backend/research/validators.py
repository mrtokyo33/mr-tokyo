import magic
from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _

def validate_latex_file(file):
    if not file.name.lower().endswith('.tex'):
        raise ValidationError(_('Only .tex files are allowed.'))

    initial_pos = file.tell()
    file.seek(0)
    mime_type = magic.from_buffer(file.read(2048), mime=True)
    file.seek(initial_pos)

    allowed_mimes = [
        'text/plain',
        'text/x-tex',
        'application/x-tex',
        'application/x-latex'
    ]

    if mime_type not in allowed_mimes:
        raise ValidationError(
            _(f"Security Alert: File masquerading as LaTeX. Detected type: {mime_type}")
        )