import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    media: {
      height: 260,
    },
    cardContent: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    cartActions: {
      justifyContent: 'space-between',
      height: '65px',
    },
    buttons: {
      display: 'flex',
      alignItems: 'center',
    },
    cartItem: {
      height: '450px',
    },
    cartText: {
      height: '65px',
      fontWeight: '600',
    },
    nameText: {
      height: '65px',
      width: '60%',
    }
  }));