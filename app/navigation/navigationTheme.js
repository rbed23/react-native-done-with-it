import { DefaultTheme } from '@react-navigation/native';
import colors from '../globals/colors';

export default {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: colors.primary,
        secondary: colors.secondary,
        background: colors.white,
    }
}