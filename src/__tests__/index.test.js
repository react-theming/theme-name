import { themeName } from '../index';

const BigTheme = {
  white: 'rgb(255, 255, 255)',
  black: 'rgb(0, 0, 0)',
  grey: 'rgb(248, 248, 248)',
  mainColor: 'rgb(41, 110, 213)',
  border: 'rgb(235, 235, 235)',
  searchLoupe: 'rgb(142, 142, 147)',
  transparent: 'transparent',
  badgeBackgroundColor: 'rgb(255, 59, 48)',
  sidebarBackgroundColor: 'rgb(240, 240, 240)',
  pink: 'rgb(245,95,152)',
  active: 'rgb(51, 51, 51)',
  inactive: 'rgb(190, 190, 190)',
  greyText: 'rgb(235, 235, 235)',
  darkGrey: 'rgb(137,137,137)',
};

describe(__filename, () => {
  it('should create big theme name', () => {
    const theme = {
      main: {
        mainColor: BigTheme.mainColor,
        badgeBackgroundColor: BigTheme.badgeBackgroundColor,
      },
      accent: { pink: BigTheme.pink },
    };
    expect(themeName(theme)).toMatchInlineSnapshot(`"Flickr Blue Red Orange"`);
  });

  it('should create small theme name', () => {
    const theme = {
      main: {
        mainColor: BigTheme.mainColor,
      },
      accent: { pink: BigTheme.pink },
    };
    expect(themeName(theme)).toMatchInlineSnapshot(`"Flickr Blue Medium Pink"`);
  });

  it('should create tiny theme name', () => {
    const theme = {
      accent: { pink: BigTheme.pink },
    };
    expect(themeName(theme)).toMatchInlineSnapshot(`"Medium Pink"`);
  });

  it('should create usual theme name', () => {
    const theme = {
      main: BigTheme.pink,
      red: BigTheme.badgeBackgroundColor,
    };
    expect(themeName(theme)).toMatchInlineSnapshot(`"Medium Pink Red Orange"`);
  });

  it('should create theme name by provided name', () => {
    const theme = {
      themeName: 'Light Theme',
      main: BigTheme.pink,
      red: BigTheme.badgeBackgroundColor,
    };
    expect(themeName(theme)).toMatchInlineSnapshot(`"Light Theme"`);
  });

  it('should return theme ind', () => {
    const theme = {
      colors: {
        main: BigTheme.pink,
        red: BigTheme.badgeBackgroundColor,
      },
    };
    expect(themeName(theme, 0)).toBe('theme 1');
  });

  it('should return undefined', () => {
    const theme = {
      colors: {
        main: BigTheme.pink,
        red: BigTheme.badgeBackgroundColor,
      },
    };
    expect(themeName(theme)).toBe(undefined);
  });
});
