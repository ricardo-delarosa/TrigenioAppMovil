all:
	cordova build android --release
	rm -f platforms/android/build/outputs/apk/android-release.apk
	rm -f platforms/android/build/outputs/apk/trigenio_finagro.apk
	/var/lib/jenkins/workspace/Colciencias_Trigenio-App/deploylinux.sh
	
allwin:
	cordova build android --release
	cd platforms\android\build\outputs\apk
	deploy.bat	
