import Api from "../../service/Api";
import {CommunityId} from "../../community/data/CommunityId";
import {TeamMember} from "../data/TeamMember";
import {getCommunity} from "../../community/CommunityService";


export const getTeamMembers = (communityId: CommunityId): Promise<TeamMember[] | undefined> => {
    return getCommunity(communityId).then(community => community.teamMembers);
};
export const getAllTeamMembers = (): Promise<TeamMember[]> => {
    return Api.get("team").then(response => response.data as TeamMember[]);
};
