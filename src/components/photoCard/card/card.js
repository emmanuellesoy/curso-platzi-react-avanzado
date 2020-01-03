/* global window */
import PropTypes from "prop-types";
import React, { useEffect, useRef, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

import {
    Button,
    Image,
    ImageWrapper,
    Wrapper,
} from "./styles";

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
            return isLiked;
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
    
    const Like = (like) ? FaHeart : FaRegHeart;
    
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
                        <a href={`/detail/${id}`}>
                            <ImageWrapper>
                                <Image src={src} alt={`Imagen número ${id}`} />
                            </ImageWrapper>
                        </a>
                        <Button type="button" onClick={() => saveLike(!like)}>
                            <Like size="16" />{likes}
                        </Button>
                    </>
                )
            }
        </Wrapper>
    );
};  

Card.propTypes = {
    id: PropTypes.number,
    likes: PropTypes.number,
    src: PropTypes.string,
};

Card.defaultProps = {
    id: 0,
    likes: 0,
    src: "https://picsum.photos/500",
};

export default Card;
