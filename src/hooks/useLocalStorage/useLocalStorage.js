import React, { useEffect, useRef, useState } from "react";

const [ like, setLike ] = useState(() => {
    try {
        const isLiked = window.localStorage.getItem(`like-${id}`);
        return isLiked;
    } catch (e) {
        return false;
    }
});
