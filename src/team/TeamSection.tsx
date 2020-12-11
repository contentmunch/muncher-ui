import React, {useEffect, useState} from 'react';
import './assets/Team.scss';
import {TeamCard} from "./card/TeamCard";
import {TeamCardSkeleton} from "./card/TeamCardSkeleton";
import {CommunityId} from "..";
import {getAllTeamMembers} from "../community/CommunityService";
import {TeamMember} from "./data/TeamMember";
import {getTeamMembers} from "./service/TeamService";

export const TeamSection: React.FC<TeamSectionProps> = ({communityId}) => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
    useEffect(() => {
        if (communityId) {
            getTeamMembers(communityId).then(members => {
                setIsLoading(false);
                if (members) {
                    setTeamMembers(members);
                }
            });
        } else {
            getAllTeamMembers().then(members => {
                setIsLoading(false);
                setTeamMembers(members);
            });
        }

    }, [communityId]);
    return (
        <section className="section-team">
            <h2 className="heading"><span className="emphasized">Meet Our Team</span></h2>
            <div className="members">
                {isLoading ?
                    [...Array(communityId ? 3 : 20)].map((_, i) => (
                        <TeamCardSkeleton key={i}/>
                    )) :
                    teamMembers.map(member => (
                        <TeamCard key={member.name} member={member}/>
                    ))}
            </div>

        </section>
    );
};

export interface TeamSectionProps {
    communityId?: CommunityId;
}