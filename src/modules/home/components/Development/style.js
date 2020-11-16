import img2 from '../../../../assets/bgimage2.jpg';
export const style = {
    para: {
        fontSize: '19px',
        color: '#fff',
        letterSpacing: '2px',
        fontWeight: '500',
        lineHeight: '30px',
        textAlign: 'center',

    },
    heading: {
        color: '#fff',
        fontSize: '63px',
        marginTop: '200px',
        textAlign: 'center',
    },
    alignment: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: '#2176ff',
        fontWeight: '400',
        borderRadius: '50px',
        padding: '13px 49px',
        marginTop: '10px',
        outline: 'none',
        marginBottom: '200px',



    },
    atag: {
        textDecoration: 'none',
    },
    contactbutton: {
        marginLeft: '100px'
    },
    bgimage: {
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
        maxWidth: '100%',
        height: '800px',
        width: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundImage: `url(${img2})`,
    }


}