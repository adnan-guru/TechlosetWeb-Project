import img2 from '../../../../assets/bgimage2.jpg';
export const style = {
   
    main:{
        position:'fixed',
    },
    bgimage: {
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
        maxWidth: '100%',
        height: '670px',
        width: '100%',
        backgroundSize:'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundImage: `url(${img2})`,
    },
    para: {
        fontSize: '23px',
        color: 'rgb(255, 255, 255)',
        letterSpacing: '2px',
        fontWeight: '300',
        lineHeight: '30px',
        textAlign: 'center',
        fontFamily: 'Roboto',
    },
    heading: {
        marginTop:'160px',
        color: '#fff',
        fontWeight: '700',
        fontSize: '60px',
        marginBottom: '20px',
        textAlign: 'center',
        fontFamily: 'Roboto", "Helvetica", "Arial", sans-serif',
    },
    heading2: {
        marginTop:'40px',
        color: '#fff',
        fontWeight: '700',
        fontSize: '4.5vw',
        marginBottom: '20px',
        textAlign: 'center',
        fontFamily: 'Roboto", "Helvetica", "Arial", sans-serif',

    },
   
    alignment: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    

}