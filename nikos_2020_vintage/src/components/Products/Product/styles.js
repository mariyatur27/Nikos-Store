import { makeStyles } from "@material-ui/core/styles";

export default makeStyles( () => ({
    root: {
        maxWidth: '100%',
        height: '500px',
      },
      media: {
        height: 0,
        paddingTop: '85.25%', // 16:9
      },
      cardActions: {
        display: 'flex',
        justifyContent: 'flex-end',
      },
      cardContent: {
        marginBottom: '10px',
        height: '55px',
      },
      cardContentMain: {
        height: '75px',
      }
}));