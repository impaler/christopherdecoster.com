// todo support mappings with
// https://github.com/chriskempson/base16/blob/master/file.md

export interface Theme
{
  text: {
    color: string
    secondaryColor: string
    linkColor: string
    hoverColor: string
    activeColor: string
    codeColor: string
  },
  border: {
    color: string
  },
  background: {
    color: string
    hoverColor: string
    secondaryColor: string
    tertiaryColor: string
    iconColor: string
    iconHoverColor: string
  },
}
