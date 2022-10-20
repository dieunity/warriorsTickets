import { mockDataUpperLevel } from "../mockData/mockData";

export const UpperLevelAd = () => {
  const Listings = mockDataUpperLevel.map((game, idx) => {
    return (
      <p className="paragraph" key={idx}>
        {game.data}
      </p>
    );
  });

  return (
    <div>
      <p className="paragraph">
        This is the listing for my upper level tickets at section 216, row 11
        (actual 2nd row so the view is great)!
      </p>
      <p className="paragraph">
        Note: Prices are per ticket (starting at $69/ticket). Will not sell
        individual tickets.
      </p>
      <p className="paragraph">
        **PRICES ARE SUBJECT TO CHANGE DUE TO RESALE VALUE (PLEASE REFRESH AD TO
        GET LATEST PRICES)** (game with an asterisk * means the opposing team
        only comes that one time this year) 2022 For playoffs tickets, let me
        know!
      </p>
      {Listings}
    </div>
  );
};
