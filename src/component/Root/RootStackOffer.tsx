
import { uid } from 'uid';
import { FadeOfferScreen } from '../BottomNavigation/AniScreenBottomTab';


export enum RootStackScreenEnumOffer {
    OfferHome = 'OfferHome',

}

export type RootStackParamListOffer = {
    OfferHome: undefined,
}


export const RootStackScreenOffer = () => {
    const Screen: any = [
        { id: uid(), name: RootStackScreenEnumOffer.OfferHome, component: FadeOfferScreen, options: {} },


    ]
    return Screen;
}
