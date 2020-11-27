import bgimg from '../../../../assets/bgimage3.jpg';
export const style = {
    bgimage: {
        backgroundImage: `url(${bgimg})`,
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
        maxWidth: '100%',
        height: ' 300px',
        width: '100%',
        minHeight: '150px',
        backgroundRepeat: 'no-repeat',
        marginTop: '100px'
    },
    heading: {
        textAlign: 'center',
        marginTop: '150px',
        fontSize: '42px',
        lineHeight: '1.5',
        color: '#323643',
        fontWeight: '700',
    },

    bgcolor: {
        backgroundColor: '#3972ff',

    },
    para: {
        fontWeight: '300',
        textAlign: 'center',
        color: '#fff',
        letterSpacing: '2px',
        marginTop:'30px'
    },
    
    button: {
        backgroundColor: '#fff',
        lineHeight: '17px',
        fontSize: '14px',
        color: '#1f1f27',
        borderRadius: '50px',
        padding: '10px 30px 10px 30px',
    },
    alignitem: {
        display: 'flex',
        flexDirection: 'colume',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '30px',
        marginBottom: '65px',

    }

}