/* global window */
import PropTypes from "prop-types";
import React, { useEffect, useRef, useState } from "react";

import {
    Image,
    ImageWrapper,
    Wrapper,
} from "./styles";

import Like from "./like";
import ToggleLike from "./toggleLike";

const Card = (props) => {
    const {
        id,
        likes,
        src,
    } = props;
    
    const element = useRef(null);
    const [ show, setShow ] = useState(false);
    const [ like, setLike ] = useState(() => {
        try {
            const isLiked = window.localStorage.getItem(`like-${id}`);
            return Boolean(isLiked);
        } catch (e) {
            return false;
        }
    });
    
    useEffect(() => {
        Promise.resolve(
            typeof window.IntersectionObserver !== "undefined"
                ? window.IntersectionObserver
                : import("intersection-observer")
        ).then(() => {
            const observer = new window.IntersectionObserver((entries) => {
                const { isIntersecting } = entries[0];
                setShow(isIntersecting);
            });
            observer.observe(element.current);
        });
    }, [element]);
    
    const saveLike = value => {
        try {
            window.localStorage.setItem(`like-${id}`, value);
            setLike(value);
            return true;
        } catch (e) {
            return false;
        }
    };
    
    return (
        <Wrapper ref={element}>
            {
                show && (
                    <>
                        <a href={`?detail=${id}`}>
                            <ImageWrapper>
                                <Image src={src} alt={`Imagen número ${id}`} />
                            </ImageWrapper>
                        </a>
                        <ToggleLike>
                            {
                                (toggleLike) => {
                                    const handleLike = () => {
                                        if (!like) {
                                            toggleLike({
                                                variables: {
                                                    input: { id }
                                                }
                                            });
                                        };
                                        saveLike(!like);
                                    };
                                    return (
                                        <Like like={like} likes={likes} onClick={handleLike} />
                                    );
                                }
                            }
                        </ToggleLike>
                    </>
                )
            }
        </Wrapper>
    );
};  

Card.propTypes = {
    id: PropTypes.string.isRequired,
    likes: PropTypes.number,
    src: PropTypes.string,
};

Card.defaultProps = {
    likes: 0,
    src: "https://picsum.photos/500",
};

export default Card;
