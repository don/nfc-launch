# NFC Launch

Launch a Cordova app by scanning a NFC tag.

Uses [phonegap-nfc](http://github.com/chariotsolutions/phonegap-nfc).

### Create Sample NFC Tag

Use [NFC Tag Writer](https://play.google.com/store/apps/details?id=com.nxp.nfc.tagwriter&hl=en) to create a NFC tag with the following data

  * TNF: Well Known
  * Type: URI
  * Payload: http://example.com/foo

Details
 * Launch NFC Tag Writer
 * Choose Write tags
 * Choose New dataset
 * Choose Link
 * Enter http://example.com/foo in the Website field
 * Do **not** enter anything in the optional title field.

### Intent Filter

The intent filter is defined in AndroidManifest.xml

    <intent-filter>
        <action android:name="android.nfc.action.NDEF_DISCOVERED" />
        <category android:name="android.intent.category.DEFAULT" />
        <data android:host="example.com" android:pathPrefix="" android:scheme="http" />
    </intent-filter>

# Compile and Run

Build and deploy to an Android phone using Cordova 5.0.0

    cordova run --device

While the app is running, Scan an NFC tag to ensure foreground dispatch works.

Close the app

Scan the NFC tag you created. The app will launch and display the tag info.
