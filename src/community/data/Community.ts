import {TeamMember} from "../../team/data/TeamMember";

export interface Community {
    communityId:string;
    communityName:string;
    communityEmail?:string;
    conversionTrackingIds?:string[];
    teamMembers?:TeamMember[];

}