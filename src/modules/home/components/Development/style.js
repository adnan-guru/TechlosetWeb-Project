import img2 from '../../../../assets/bgimage2.jpg';
export const style = {
   
    main:{
        position:'fixed',
    },
    para: {
        fontSize: '19px',
        color: 'rgb(255, 255, 255)',
        letterSpacing: '2px',
        fontWeight: '300',
        lineHeight: '30px',
        textAlign: 'center',
    },
    heading: {
        paddingTop:'70px',
        color: '#fff',
        fontWeight: '700',
        fontSize: '4.5vw',
        marginTop: '80px',
        marginBottom: '20px',
        textAlign: 'center',
    },
    alignment: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    bgimage: {
        
        backgroundPosition: '60% 30%',
        backgroundSize: 'cover',
        maxWidth: '100%',
        height: '670px',
        width: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundImage: `url(${img2})`,
    }


}