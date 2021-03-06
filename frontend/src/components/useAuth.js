import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useAuth(code) {
    const [accessToken, setAccessToken] = useState();
    const [refreshToken, setRefreshToken] = useState();
    const [expiresIn, setExpiresIn] = useState();
    useEffect(() => {
        axios
        .post('https://www.playfulmusic-app.com/login', {
            code
        })
        .then(res => {
            console.log(res.data);
            setAccessToken(res.data.accessToken);
            setRefreshToken(res.data.refreshToken);
            setExpiresIn(res.data.expiresIn);
            window.history.pushState({}, null, "/");
        })
        .catch(err => {
            console.log(err);
        })
    }, [code])

    useEffect(() => {
        if (!refreshToken || !expiresIn) {
            return;
        }
        axios
        .post('https://www.playfulmusic-app.com/refresh', {
            refreshToken,
        })
        .then(res => {
            setAccessToken(res.data.accessToken);
            setExpiresIn(res.data.expiresIn);
            window.history.pushState({}, null, "/");
        })
        .catch(() => {
            return;
        })
    }, [refreshToken, expiresIn])

    return accessToken;
}


