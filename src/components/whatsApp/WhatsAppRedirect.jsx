import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function WhatsAppRedirect() {
    const navigate = useNavigate();

    useEffect(() => {
        // Redirect to home page
        navigate('/');
    }, [navigate]);

    return null; // Tidak menampilkan apa pun
}

export default WhatsAppRedirect;
