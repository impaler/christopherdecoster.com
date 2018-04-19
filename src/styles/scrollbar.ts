export const scrollBarStyle = () => `

*::-webkit-scrollbar {
  width: 10px ! important;
  height: 10px ! important;
  background: #070707 ! important;
  border: 1px solid #0e0e0e ! important;
}

*::-webkit-scrollbar-button {
  display: none ! important;
}

*::-webkit-scrollbar-thumb,
*::-webkit-scrollbar-track {
  border: 0 ! important;
  box-shadow: none ! important;
}

*::-webkit-scrollbar-thumb {
  min-height: 28px ! important;
  background: #2c2c2c ! important;
}

*::-webkit-scrollbar-thumb:hover {
  background: #6a6a6a ! important;
}

*::-webkit-scrollbar-corner,
*::-webkit-scrollbar-track {
  background: #0c0c0c ! important;
}
`
