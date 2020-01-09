/* global document, window, */
import React, { useState, useEffect } from "react";

import Card from "../card";
import { Ul, Li } from "./styles";
import Loading from "../../loading";

const List = (props) => {
    const {
        data,
    } = props;
    const [ showFixed, setShowFixed ] = useState(false);
    
    useEffect(() => {
        const onScroll = () => {
            const onShowFixed = window.scrollY > 200;
            if (showFixed !== onShowFixed) {
                setShowFixed(onShowFixed);
            }
        };
        
        document.addEventListener("scroll", onScroll);
        
        return () => document.removeEventListener("scroll", onScroll);
    }, [showFixed]);
    
    const list = (fixed) => {
        if (data.categories) {
            return (
                <Ul fixed={fixed}>
                    {
                        data.categories.map(category => (
                            <Li key={category.id}>
                                <Card
                                    emoji={category.emoji}
                                    path={`/category/${category.id}`}
                                    cover={category.cover}
                                />
                            </Li>
                        ))
                    }
                </Ul>
            );
        }
        return (
            <Loading.Wrapper>
                <Loading.Spinner size="45" />
            </Loading.Wrapper>
        );
    };

    return list(showFixed);
};

export default List;
