import React, {Fragment} from "react";
import {TeamMember} from "../..";
import defaultAvatar from "../../assets/default-avatar.png";
import "./assets/TeamCard.scss";
export const TeamCard: React.FC<TeamCardProps> = ({member}) => {

    return (
        <Fragment>
            {
                member ?
                    <div className="team-member">
                        <img className="team-image" src={member.imageUrl  ? member.imageUrl : defaultAvatar}
                             alt={member.name}
                        />
                        <h4>{member.name}</h4>
                        <p>{member.jobTitle}</p>

                    </div> : ""}
        </Fragment>
    );
}

export interface TeamCardProps {
    member?: TeamMember;
}