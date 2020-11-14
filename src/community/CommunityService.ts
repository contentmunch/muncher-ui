import Api from "../service/Api";
import {CommunityId} from "./data/CommunityId";
import {Community} from "./data/Community";
import {TeamMember} from "../team/data/TeamMember";

export const getCommunity = (communityId: CommunityId): Promise<Community> => {
    return Api.get("communities").then(response => response.data[communityId] as Community);
};
export const getAllTeamMembers = (): Promise<TeamMember[]> => {
    return Api.get("team").then(response => response.data as TeamMember[]);
};
