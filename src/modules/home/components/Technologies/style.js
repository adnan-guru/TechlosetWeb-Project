import { colors } from "../../../../commonComponents/constants/color"

const { styled } = require("@material-ui/core")

export const style = {
  heading: {
    textAlign: 'center',
    fontSize: '57px',
    lineheight: '1.17',
    marginTop: '50px',
    fontWeight: '500',
    lineHeight: '70px',
    color: colors.infoColor,
    },
  text: {
    padding: '15px',
    color: colors.primaryColor,
    fontSize: '18px',
    marginLeft: '50px',
    fontWeight: '400'

  },
  heading2: {
    padding: '15px',
    color: 'black',
    fontSize: '18px',
    marginLeft: '40px',
    fontWeight: '400'

  },
  icons: {
    marginLeft: '50px'
  },
  img1: {
    maxWidth: '100%',
    height: 'auto',
  },
  main: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  }



}
