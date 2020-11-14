import React, {useEffect, useState} from "react";
import {CardSlider} from "../../card/CardSlider";
import {getFeaturedUnits} from "../service/UnitService";
import {Card} from "../../card/data/Card";
import {Domain} from "../../community/data/Domain";
import {CardSliderSkeleton} from "../../card/CardSliderSkeleton";

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
        isLoading ? <CardSliderSkeleton/> : <CardSlider cards={cards} />
    );
}

export interface FeaturedUnitSliderProps {
    domain: Domain;
}
