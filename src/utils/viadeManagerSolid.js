import { storageHelper, parsePodFiles, notification } from "@utils";

export const iniciateStructure = async (webId) => {
	return await storageHelper.createInitialFiles(webId);
};

export const addRoute = async (route, webId) => {
	if (route.multimedia.length > 0) {
		for (let i = 0; i < route.multimedia.length; i++) {
			addMedia(route.multimedia[parseInt(i)], webId);
		}
	}
	return await storageHelper.addRoute(webId, route);
};

export const readRoutesFromPod = async (webId) => {
	return await parsePodFiles.getRoutesFromPod(webId);
};

export const addMedia = async (media, webId) => {
	return await storageHelper.addMedia(webId, media);
};
export const Invitation = async (route, webId) => {
	return await notification.handleSave(route, webId);
};

export const getTtl= (element)=>{
	let file;
	parsePodFiles.getTTLFile(element)
	.then(function(value) {
			file=value;
			console.log(file);
			return file;
	});

}
