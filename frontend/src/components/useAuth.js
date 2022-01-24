import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useAuth() {
    const [accessToken, setAccessToken] = useState();
    const [refreshToken, setRefreshToken] = useState();
    const [expiresIn, setExpiresIn] = useState();
    const code = new URLSearchParams(window.location.search).get('code');
    useEffect(() => {
        axios
        .post(`${process.env.PORT}/login`, {
            code
        })
        .then(res => {
            console.log(res.data);
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
        .post(`${process.env.PORT}/refresh`, {
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


