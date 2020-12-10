import Api from "../../service/Api";
import {ContactMessage} from "../data/ContactMessage";
import {CommunityId} from "../../community/data/CommunityId";
import {CommunityContact} from "../data/CommunityContact";
import {getCommunity} from "../../community/CommunityService";

export const sendContactMail = (message: ContactMessage) => {
    return Api.post("mail/contact", message).then(response => response.data);
};
export const sendToConversionTracking = (trackingIds: string[]) => {
    if (window.gtag) {
        trackingIds.forEach(trackingId => {
            try {
                window.gtag('event', 'conversion', {'send_to': trackingId});
            } catch (error) {
                console.log("Error from the trackerPageView => ", error);
            }
        });
    }
};
export const getCommunityContact = (communityId: CommunityId): Promise<CommunityContact> => {
    return getCommunity(communityId).then(community => {
        return {
            conversionTrackingIds: community.conversionTrackingIds,
            to: community.communityEmail,
            communityName: community.communityName,
            as: community.communityEmail,
            subject: "Message from " + community.communityName
        }
    });
};