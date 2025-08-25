import React from 'react'

const ErrorMessage = ({ error }) => (
  <div data-testid="error">Oops! An error occured: {error.toString()}</div>
)

export default ErrorMessage
