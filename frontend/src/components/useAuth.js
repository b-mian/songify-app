import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useAuth(code) {
    const [accessToken, setAccessToken] = useState("");
    const [refreshToken, setRefreshToken] = useState("");
    const [expiresIn, setExpiresIn] = useState(0);
    
    useEffect(() => {
        console.log(code);
        axios
        .post('https://songify-music.herokuapp.com/login', {
            code
        })
        .then(res => {
            setAccessToken(res.data.accessToken);
            setRefreshToken(res.data.refreshToken);
            setExpiresIn(res.data.expiresIn);
            window.history.pushState({}, null, "/");
        })
        .catch(() => {
            console.log("Error");
        })
    }, [code])

    useEffect(() => {
        if (!refreshToken || !expiresIn) {
            return;
        }
        axios
        .post('https://songify-music.herokuapp.com/refresh', {
            refreshToken,
        })
        .then(res => {
            setAccessToken(res.data.accessToken);
            setExpiresIn(res.data.expiresIn);
            window.history.pushState({}, null, "/");
        })
        .catch(() => {
            return
        })
    }, [refreshToken, expiresIn])

    return accessToken;
}


