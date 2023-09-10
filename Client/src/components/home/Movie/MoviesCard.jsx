import { Box, Card, styled, CardMedia } from "@mui/material";
import React from "react";

const MoviesCard = ({ item }) => {
    const useStyles = styled({
        root: {
            maxWidth: 310,
            transition: "transform 0.15s ease-in-out",
        },
        cardHovered: {
            transform: "scale3d(1.05, 1.05, 1)",
        },
    });
    const classes = useStyles();
    const [state, setState] = React.useState({
        raised: false,
        shadow: 1,
    });
    return (
        <Card
            sx={{ margin: 2, width: 226 }}
            classes={{ root: state.raised ? classes.cardHovered : "" }}
            onMouseOver={() => setState({ raised: true, shadow: 3 })}
            onMouseOut={() => setState({ raised: false, shadow: 1 })}
            raised={state.raised}
            zdepth={state.shadow}
        >
            <Box position="relative">
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="127.13px"
                    image={item.imgUrl}
                />
            </Box>
        </Card>
    );
};

export default MoviesCard;