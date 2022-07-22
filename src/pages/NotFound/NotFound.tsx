import React from 'react'
import { classes } from '../../styles/styleClasses'

const NotFound : React.FC = () => {

  const styles : any = {
    customClasses: {
        height: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }
  };

  return (
    <div style={{ ...classes.fonts, ...styles.customClasses }}>
        Error, 404 not found page
    </div>
  )
}

export default NotFound;