import React from "react";
import { WebView } from "react-native-webview"

function WhatsappPage() {
    return (
        <WebView
            source={{
                uri: 'https://web.whatsapp.com/'
            }}
            style={{ marginTop: 20 }}
        />
    )
}

export default WhatsappPage;
