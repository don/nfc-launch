var app = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        var success = function() {
            console.log("addNdefListener success");
        };
        var failure = function(reason) {
            alert("addNdefListener failed " + reason);
        }

        // The NDEF listener runs in the foreground
        nfc.addNdefListener(app.onNfc, success, failure);

        // The Mime-Type listener is required to handle NDEF messages that
        // launch the app from an intent filters in AndroidManifest.xml.
        // For messages from intents, the mime type defined here doesn't matter.
        // Note the same event handler is used for NDEF and Mime
        nfc.addMimeTypeListener('text/any', app.onNfc, success, failure);
    },
    onNfc: function(nfcEvent) {
        var tag = nfcEvent.tag,
            ndefMessage = tag.ndefMessage;

        // dump the raw json of the message
        // note: real code will need to decode
        // the payload from each record
        alert(JSON.stringify(ndefMessage));

        // show the payload of the first record as a string
        // might produce junk depending on the record type
        alert(nfc.bytesToString(ndefMessage[0].payload).substring(1));

    }
};

app.initialize();
