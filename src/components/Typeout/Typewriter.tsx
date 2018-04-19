import * as React from 'react'

export interface TypewriterProps
{
  children: string
  speed?: number
  className?: string
}

type TypewriterState = {
  visibleText: string
  characters: string[]
  position: number
  completed: boolean
}

export class Typewriter extends React.Component<TypewriterProps, TypewriterState>
{
  static defaultProps = {
    speed: 70,
  }
  private timerID

  constructor (props)
  {
    super(props)
    const { children } = this.props
    const childrenType = typeof children
    if (childrenType !== 'string') {
      console.error('All children for Typewriter must be a string.', childrenType)
    }
    const characters = children.split('')

    this.state = {
      visibleText: '',
      characters,
      position: 0,
      completed: false,
    }
  }

  componentDidMount ()
  {
    this.timerID = setInterval(
      () => this._typeStep(),
      this.props.speed,
    )
  }

  componentWillUnmount ()
  {
    clearInterval(this.timerID)
  }

  render ()
  {
    return <div className={this.props.className}>
      {this.state.visibleText}
    </div>
  }

  private _typeStep ()
  {
    const { visibleText, position, characters } = this.state
    if (position < characters.length) {
      const nexChar = characters[position]

      this.setState({
        visibleText: `${visibleText}${nexChar}`,
        position: position + 1,
      })
    } else {
      this.setState({
        completed: true,
      })
      clearInterval(this.timerID)
    }
  }

}
