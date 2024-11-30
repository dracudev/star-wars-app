export type AppProps = {
  message: string;
  count: number;
  disabled: boolean;

  /** array of a type! */
  names: string[];

  /** string literals to specify exact string values, with a union type to join them together */
  status: "waiting" | "success";

  /** an object with known properties (but could have more at runtime) */
  obj: {
    id: string;
    title: string;
  };

  /** array of objects! (common) */
  objArr: {
    id: string;
    title: string;
  }[];

  /** function that doesn't take or return anything (VERY COMMON) */
  onClick: () => void;
  /** function with named prop (VERY COMMON) */
  onChange: (id: number) => void;

  /** when passing down the state setter function returned by `useState` to a child component. `number` is an example, swap out with whatever the type of your state */
  setState: React.Dispatch<React.SetStateAction<number>>;
};
