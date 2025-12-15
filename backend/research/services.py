import re
import pypandoc
import bleach
from pylatexenc.latexwalker import LatexWalker, LatexMacroNode
from .constants import LATEX_MACRO_TITLE

ALLOWED_TAGS = [
    'h1', 'h2', 'h3', 'p', 'b', 'i', 'strong', 'em', 'br', 'hr',
    'ul', 'ol', 'li', 'span', 'div', 'blockquote', 'pre', 'code',
    'table', 'thead', 'tbody', 'tr', 'th', 'td', 'a', 'img'
]

ALLOWED_ATTRIBUTES = {
    '*': ['class', 'style', 'id'],
    'a': ['href', 'title', 'target'],
    'img': ['src', 'alt', 'title', 'width', 'height']
}

class LatexProcessor:
    @staticmethod
    def clean_latex_title(text):
        if not text: return ""
        text = re.sub(r'\\[a-zA-Z]+\{([^}]+)\}', r'\1', text)
        text = text.replace('{', '').replace('}', '')
        text = re.sub(r'\\[a-zA-Z]+', '', text)
        return text.strip()

    @staticmethod
    def extract_metadata(latex_source):
        walker = LatexWalker(latex_source)
        metadata = {}
        try:
            (nodes, _, _) = walker.get_latex_nodes()
            for node in nodes:
                if isinstance(node, LatexMacroNode) and node.macroname == LATEX_MACRO_TITLE:
                    try:
                        title_node = node.nodeargd.argnlist[0]
                        raw_title = title_node.latex_verbatim()
                        metadata['title'] = LatexProcessor.clean_latex_title(raw_title)
                    except (IndexError, AttributeError):
                        continue
        except Exception as e:
            print(f"Error parsing metadata: {e}")
        return metadata

    @staticmethod
    def convert_to_html(latex_source):
        try:
            raw_html = pypandoc.convert_text(
                latex_source, 
                'html', 
                format='latex', 
                extra_args=['--mathjax']
            )

            clean_html = bleach.clean(
                raw_html,
                tags=ALLOWED_TAGS,
                attributes=ALLOWED_ATTRIBUTES,
                strip=True
            )
            
            return clean_html

        except Exception as e:
            return f"<p class='error'>Error processing content: {e}</p>"