import re
import pypandoc
from pylatexenc.latexwalker import LatexWalker, LatexMacroNode
from .constants import LATEX_MACRO_TITLE

class LatexProcessor:
    @staticmethod
    def clean_latex_title(text):
        if not text:
            return ""
        
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
            return pypandoc.convert_text(
                latex_source, 
                'html', 
                format='latex', 
                extra_args=['--mathjax']
            )
        except Exception as e:
            return f"<p class='error'>Error converting LaTeX: {e}</p>"