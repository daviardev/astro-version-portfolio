export const BioSection = ({ children }) => {
  return (
    <>
      <div style={{
        paddingLeft: '3.4em',
        textIndent: '-3.4em'
      }}
      >
        {children}
      </div>
    </>
  )
}

export const BioYear = ({ children }) => {
  <span style={{
    fontWeight: 'bold',
    marginRight: '1em'
  }}
  >
    {children}
  </span>
}
