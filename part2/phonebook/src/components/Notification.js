export const Notification = ({ message, style }) => {
    if (message === "" || message === null) {
      return null
    }

    return (
      <div style={style}>
        {message} 
      </div>
    )
  }