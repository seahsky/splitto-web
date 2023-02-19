import { createStyles } from "@mantine/core";

export default createStyles((theme) => ({
    topNavContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    buttonContainer: {
        display: 'flex',
        alignItems: 'center'
    },
    button: {
        marginLeft: 5,
        marginRight: 5
    }
}));