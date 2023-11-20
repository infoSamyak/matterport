const showcase = document.getElementById("showcase") as HTMLIFrameElement;
const key = "n6npxqct88mnqea6b9m7w4cea";

// declare this file is a module
export {};

// augment window with the MP_SDK property
declare global {
	interface Window {
		MP_SDK: any;
	}
}

showcase.addEventListener("load", async function () {
	console.log("%c  Hello Bundle SDK! ", "background: #333333; color: #00dd00");

	let sdk;
	try {
		sdk = await showcase.contentWindow.MP_SDK.connect(showcase, key, "3.6");
	} catch (e) {
		console.error(e);
		return;
	}

	console.log("%c  Hello Bundle SDK! ", "background: #333333; color: #00dd00");
	console.log(sdk);
});
