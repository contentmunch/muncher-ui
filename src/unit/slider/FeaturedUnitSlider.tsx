import React, {useEffect, useState} from "react";
import {Card, CardSlider, CardSliderSkeleton, Domain} from "../..";
import {getFeaturedUnits} from "../service/UnitService";

export const FeaturedUnitSlider: React.FC<FeaturedUnitSliderProps> = ({domain}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [cards, setCards] = useState<Card[]>([]);
    useEffect(() => {
        getFeaturedUnits(domain).then((cards) => {
            setCards(cards);
            setIsLoading(false);
        });
    }, [domain]);
    return (
        isLoading ? <CardSliderSkeleton/> : <CardSlider cards={cards}/>
    );
}

export interface FeaturedUnitSliderProps {
    domain: Domain;
}
