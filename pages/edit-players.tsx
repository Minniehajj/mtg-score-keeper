import React, { useEffect } from "react";
import { styled, keyframes } from "@stitches/react";
import { violet, blackA, mauve, green, red, blue } from "@radix-ui/colors";
import { Cross2Icon } from "@radix-ui/react-icons";
import * as DialogPrimitive from "@radix-ui/react-dialog";

const overlayShow = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
});

const contentShow = keyframes({
  "0%": { opacity: 0, transform: "translate(-50%, -48%) scale(.96)" },
  "100%": { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
});

const StyledOverlay = styled(DialogPrimitive.Overlay, {
  backgroundColor: blackA.blackA9,
  position: "fixed",
  inset: 0,
  "@media (prefers-reduced-motion: no-preference)": {
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
  },
});

const StyledContent = styled(DialogPrimitive.Content, {
  backgroundColor: "white",
  borderRadius: 6,
  boxShadow:
    "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw",
  maxWidth: "450px",
  maxHeight: "85vh",
  padding: 25,
  "@media (prefers-reduced-motion: no-preference)": {
    animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
  },
  "&:focus": { outline: "none" },
});

function Content({ children, ...props }) {
  return (
    <DialogPrimitive.Portal>
      <StyledOverlay />
      <StyledContent {...props}>{children}</StyledContent>
    </DialogPrimitive.Portal>
  );
}

const StyledTitle = styled(DialogPrimitive.Title, {
  margin: 0,
  fontWeight: 500,
  color: mauve.mauve12,
  fontSize: 17,
});

const StyledDescription = styled(DialogPrimitive.Description, {
  margin: "10px 0 20px",
  color: mauve.mauve11,
  fontSize: 15,
  lineHeight: 1.5,
});

// Exports
export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogContent = Content;
export const DialogTitle = StyledTitle;
export const DialogDescription = StyledDescription;
export const DialogClose = DialogPrimitive.Close;

// Your app...
const Flex = styled("div", { display: "flex" });
const Box = styled("div", {});

const Button = styled("button", {
  all: "unset",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 4,
  padding: "5px 15px",
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
  height: 35,
  transition: "all 150ms cubic-bezier(0.16, 1, 0.3, 1) 0ms",
  variants: {
    variant: {
      violet: {
        backgroundColor: "white",
        color: violet.violet11,
        boxShadow: `0 2px 10px ${blackA.blackA7}`,
        "&:hover": { backgroundColor: mauve.mauve3 },
        "&:focus": { boxShadow: `0 0 0 2px black` },
      },
      green: {
        backgroundColor: green.green4,
        color: green.green11,
        "&:hover": { backgroundColor: green.green5 },
        "&:focus": { boxShadow: `0 0 0 2px ${green.green7}` },
      },
      red: {
        backgroundColor: red.red4,
        color: red.red11,
        "&:hover": { backgroundColor: red.red5 },
        "&:focus": { boxShadow: `0 0 0 2px ${red.red7}` },
      },
      darkRed: {
        backgroundColor: red.red10,
        color: "#fff",
        "&:hover": { backgroundColor: red.red11 },
        "&:focus": { boxShadow: `0 0 0 2px ${red.red11}` },
      },
    },
  },

  defaultVariants: {
    variant: "violet",
  },
});

const IconButton = styled("button", {
  all: "unset",
  fontFamily: "inherit",
  borderRadius: "100%",
  height: 25,
  width: 25,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  color: violet.violet11,
  position: "absolute",
  top: 10,
  right: 10,

  "&:hover": { backgroundColor: violet.violet4 },
  "&:focus": { boxShadow: `0 0 0 2px ${violet.violet7}` },
});

const Fieldset = styled("fieldset", {
  all: "unset",
  display: "flex",
  gap: 20,
  alignItems: "center",
  marginBottom: 15,
});

const Label = styled("label", {
  fontSize: 15,
  color: violet.violet11,
  width: 90,
  textAlign: "right",
});

const Input = styled("input", {
  all: "unset",
  width: "100%",
  flex: "1",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 4,
  padding: "0 10px",
  fontSize: 15,
  lineHeight: 1,
  color: violet.violet11,
  boxShadow: `0 0 0 1px ${violet.violet7}`,
  height: 35,

  "&:focus": { boxShadow: `0 0 0 2px ${violet.violet8}` },
});

const EditPlayers = () => {
  const [loaded, setLoaded] = React.useState(false);
  const [playerOneState, setPlayerOneState] = React.useState<{
    name: string;
    archetype: string;
    record: string;
    lifeTotal?: string;
    gameScore?: string;
  }>({});
  const [playerTwoState, setPlayerTwoState] = React.useState<{
    name: string;
    archetype: string;
    record: string;
    lifeTotal?: string;
    gameScore?: string;
  }>({});
  const [eventState, setEventState] = React.useState<{
    eventName: string;
    roundInformation: string;
    format: string;
  }>({});
  const changePlayerOneData = async () => {
    const JSONdata = JSON.stringify(playerOneState);
    const endpoint = "/api/player-one";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };
    const response = await fetch(endpoint, options);
    const result = await response.json();
  };
  const changePlayerTwoData = async () => {
    const JSONdata = JSON.stringify(playerTwoState);
    const endpoint = "/api/player-two";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };
    const response = await fetch(endpoint, options);
    const result = await response.json();
  };
  const changeEventData = async () => {
    const JSONdata = JSON.stringify(eventState);

    const endpoint = "/api/event";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };
    const response = await fetch(endpoint, options);
    const result = await response.json();
  };
  const loadData = async () => {
    const playerOneResponse = await fetch("/api/player-one");
    const playerOneData = playerOneResponse.json();
    const playerTwoResponse = await fetch("/api/player-two");
    const playerTwoData = playerTwoResponse.json();
    const eventResponse = await fetch("/api/event");
    const eventData = eventResponse.json();
    const playerOne = await playerOneData;
    setPlayerOneState({
      name: playerOne.name,
      archetype: playerOne.archetype,
      record: playerOne.record,
      lifeTotal: playerOne.lifeTotal,
      gameScore: playerOne.gameScore,
    });
    const playerTwo = await playerTwoData;
    setPlayerTwoState({
      name: playerTwo.name,
      archetype: playerTwo.archetype,
      record: playerTwo.record,
      lifeTotal: playerTwo.lifeTotal,
      gameScore: playerTwo.gameScore,
    });
    const event = await eventData;
    setEventState({
      eventName: event.eventName,
      roundInformation: event.roundInformation,
      format: event.format,
    });
    setLoaded(true);
  };
  useEffect(() => {
    loadData();
  }, []);

  return (
    <Flex
      css={{
        margin: "auto",
        justifyContent: "center",
        gap: ".75rem",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <Flex
        css={{
          gap: ".75rem",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <div>
          {playerOneState.name}: <strong>{playerOneState.lifeTotal}</strong>
        </div>
        <div>Games Won: {playerOneState.gameScore}</div>
        <Flex
          css={{
            gap: "2rem",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            onClick={(e) => {
              setPlayerOneState((prevState) => {
                return {
                  ...prevState,
                  lifeTotal: String(Number(prevState.lifeTotal) + 1),
                };
              });

              changePlayerOneData();
            }}
            variant="green"
          >
            +1
          </Button>
          <Button
            onClick={(e) => {
              setPlayerOneState((prevState) => {
                return {
                  ...prevState,
                  lifeTotal: String(Number(prevState.lifeTotal) + 5),
                };
              });

              changePlayerOneData();
            }}
            variant="green"
          >
            +5
          </Button>
          <Button
            onClick={(e) => {
              setPlayerOneState((prevState) => {
                return {
                  ...prevState,
                  lifeTotal: String(Number(prevState.lifeTotal) + 10),
                };
              });
            }}
            variant="green"
          >
            +10
          </Button>
        </Flex>
        <Flex
          css={{
            gap: "2rem",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            onClick={(e) => {
              setPlayerOneState((prevState) => {
                return {
                  ...prevState,
                  lifeTotal: String(Number(prevState.lifeTotal) - 1),
                };
              });

              changePlayerOneData();
            }}
            variant="red"
          >
            -1
          </Button>
          <Button
            onClick={(e) => {
              setPlayerOneState((prevState) => {
                return {
                  ...prevState,
                  lifeTotal: String(Number(prevState.lifeTotal) - 5),
                };
              });

              changePlayerOneData();
            }}
            variant="red"
          >
            -5
          </Button>
          <Button
            variant="red"
            onClick={(e) => {
              setPlayerOneState((prevState) => {
                return {
                  ...prevState,
                  lifeTotal: String(Number(prevState.lifeTotal) - 10),
                };
              });

              changePlayerOneData();
            }}
          >
            -10
          </Button>
        </Flex>
      </Flex>
      <Flex
        css={{
          gap: ".75rem",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <div>
          {playerTwoState.name}: <strong>{playerTwoState.lifeTotal}</strong>
        </div>
        <div>Games Won: {playerTwoState.gameScore}</div>
        <Flex
          css={{
            gap: "2rem",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            onClick={(e) => {
              setPlayerTwoState((prevState) => {
                return {
                  ...prevState,
                  lifeTotal: String(Number(prevState.lifeTotal) + 1),
                };
              });

              changePlayerTwoData();
            }}
            variant="green"
          >
            +1
          </Button>
          <Button
            onClick={(e) => {
              setPlayerTwoState((prevState) => {
                return {
                  ...prevState,
                  lifeTotal: String(Number(prevState.lifeTotal) + 5),
                };
              });

              changePlayerTwoData();
            }}
            variant="green"
          >
            +5
          </Button>
          <Button
            onClick={(e) => {
              setPlayerTwoState((prevState) => {
                return {
                  ...prevState,
                  lifeTotal: String(Number(prevState.lifeTotal) + 10),
                };
              });

              changePlayerTwoData();
            }}
            variant="green"
          >
            +10
          </Button>
        </Flex>
        <Flex
          css={{
            gap: "2rem",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            onClick={(e) => {
              setPlayerTwoState((prevState) => {
                return {
                  ...prevState,
                  lifeTotal: String(Number(prevState.lifeTotal) - 1),
                };
              });

              changePlayerTwoData();
            }}
            variant="red"
          >
            -1
          </Button>
          <Button
            onClick={(e) => {
              setPlayerTwoState((prevState) => {
                return {
                  ...prevState,
                  lifeTotal: String(Number(prevState.lifeTotal) - 5),
                };
              });

              changePlayerTwoData();
            }}
            variant="red"
          >
            -5
          </Button>
          <Button
            variant="red"
            onClick={(e) => {
              setPlayerTwoState((prevState) => {
                return {
                  ...prevState,
                  lifeTotal: String(Number(prevState.lifeTotal) - 10),
                };
              });

              changePlayerTwoData();
            }}
          >
            -10
          </Button>
        </Flex>
      </Flex>
      <Button
        size="large"
        variant="darkRed"
        onClick={(e) => {
          changePlayerOneData();
          changePlayerTwoData();
        }}
      >
        Update Stream Data
      </Button>
      <Button
        size="large"
        variant="darkRed"
        onClick={(e) => {
          Promise.resolve()
            .then(() => {
              setPlayerOneState((prevState) => {
                return {
                  ...prevState,
                  lifeTotal: String(20),
                };
              });
              setPlayerTwoState((prevState) => {
                return {
                  ...prevState,
                  lifeTotal: String(20),
                };
              });
            })
            .then(() => {
              changePlayerOneData();
              changePlayerTwoData();
            });
        }}
      >
        Reset Life Totals
      </Button>
      <Button
        size="large"
        variant="darkRed"
        onClick={(e) => {
          setPlayerOneState((prevState) => {
            return {
              ...prevState,
              gameScore: String(0),
            };
          });
          setPlayerTwoState((prevState) => {
            return {
              ...prevState,
              gameScore: String(0),
            };
          });
          changePlayerOneData();
          changePlayerTwoData();
        }}
      >
        Reset Game Score
      </Button>
      <Dialog>
        <DialogTrigger asChild>
          <Button size="large">Edit Player One</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogTitle>Edit Player One</DialogTitle>
          <DialogDescription>
            Make changes to player one's profile here. Click save when you're
            done.
          </DialogDescription>
          {playerOneState && (
            <form>
              <Fieldset>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={playerOneState.name}
                  onChange={(e) => {
                    setPlayerOneState((prevState) => {
                      return { ...prevState, name: e.target.value };
                    });
                  }}
                />
              </Fieldset>
              <Fieldset>
                <Label htmlFor="archetype">Archetype</Label>
                <Input
                  id="archetype"
                  value={playerOneState.archetype}
                  onChange={(e) => {
                    setPlayerOneState((prevState) => {
                      return { ...prevState, archetype: e.target.value };
                    });
                  }}
                />
              </Fieldset>
              <Fieldset>
                <Label htmlFor="record">Record</Label>
                <Input
                  id="record"
                  value={playerOneState.record}
                  onChange={(e) => {
                    setPlayerOneState((prevState) => {
                      return { ...prevState, record: e.target.value };
                    });
                  }}
                />
              </Fieldset>
              <Fieldset>
                <Label htmlFor="lifeTotal">Life Total</Label>
                <Input
                  id="lifeTotal"
                  type="number"
                  value={playerOneState.lifeTotal}
                  onChange={(e) => {
                    setPlayerOneState((prevState) => {
                      return { ...prevState, lifeTotal: e.target.value };
                    });
                  }}
                />
              </Fieldset>
              <Fieldset>
                <Label htmlFor="gameScore">Game Score</Label>
                <Input
                  id="gameScore"
                  type="number"
                  value={playerOneState.gameScore}
                  onChange={(e) => {
                    setPlayerOneState((prevState) => {
                      return { ...prevState, gameScore: e.target.value };
                    });
                  }}
                />
              </Fieldset>
              <Flex css={{ marginTop: 25, justifyContent: "flex-end" }}>
                <DialogClose asChild>
                  <Button
                    aria-label="Close"
                    variant="violet"
                    type="submit"
                    onClick={(e) => {
                      changePlayerOneData();
                    }}
                  >
                    Save changes
                  </Button>
                </DialogClose>
              </Flex>
            </form>
          )}
          <DialogClose asChild>
            <IconButton>
              <Cross2Icon />
            </IconButton>
          </DialogClose>
        </DialogContent>
      </Dialog>
      <Dialog>
        <DialogTrigger asChild>
          <Button size="large">Edit Player Two</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogTitle>Edit Player Two</DialogTitle>
          <DialogDescription>
            Make changes to player two's profile here. Click save when you're
            done.
          </DialogDescription>
          {playerTwoState && (
            <form>
              <Fieldset>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={playerTwoState.name}
                  onChange={(e) => {
                    setPlayerTwoState((prevState) => {
                      return { ...prevState, name: e.target.value };
                    });
                  }}
                />
              </Fieldset>
              <Fieldset>
                <Label htmlFor="archetype">Archetype</Label>
                <Input
                  id="archetype"
                  value={playerTwoState.archetype}
                  onChange={(e) => {
                    setPlayerTwoState((prevState) => {
                      return { ...prevState, archetype: e.target.value };
                    });
                  }}
                />
              </Fieldset>
              <Fieldset>
                <Label htmlFor="record">Record</Label>
                <Input
                  id="record"
                  value={playerTwoState.record}
                  onChange={(e) => {
                    setPlayerTwoState((prevState) => {
                      return { ...prevState, record: e.target.value };
                    });
                  }}
                />
              </Fieldset>
              <Fieldset>
                <Label htmlFor="lifeTotal">Life Total</Label>
                <Input
                  id="lifeTotal"
                  type="number"
                  value={playerTwoState.lifeTotal}
                  onChange={(e) => {
                    setPlayerTwoState((prevState) => {
                      return { ...prevState, lifeTotal: e.target.value };
                    });
                  }}
                />
              </Fieldset>
              <Fieldset>
                <Label htmlFor="gameScore">Game Score</Label>
                <Input
                  id="gameScore"
                  type="number"
                  value={playerTwoState.gameScore}
                  onChange={(e) => {
                    setPlayerTwoState((prevState) => {
                      return { ...prevState, gameScore: e.target.value };
                    });
                  }}
                />
              </Fieldset>
              <Flex css={{ marginTop: 25, justifyContent: "flex-end" }}>
                <DialogClose asChild>
                  <Button
                    aria-label="Close"
                    variant="violet"
                    type="submit"
                    onClick={(e) => {
                      changePlayerTwoData();
                    }}
                  >
                    Save changes
                  </Button>
                </DialogClose>
              </Flex>
            </form>
          )}
          <DialogClose asChild>
            <IconButton>
              <Cross2Icon />
            </IconButton>
          </DialogClose>
        </DialogContent>
      </Dialog>
      <Dialog>
        <DialogTrigger asChild>
          <Button size="large">Edit Event Information</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogTitle>Edit Event Information</DialogTitle>
          <DialogDescription>
            Make changes to event information here. Click save when you're done.
          </DialogDescription>
          {eventState && (
            <form>
              <Fieldset>
                <Label htmlFor="eventName">Event Name</Label>
                <Input
                  id="eventName"
                  value={eventState.eventName}
                  onChange={(e) => {
                    setEventState((prevState) => {
                      return { ...prevState, eventName: e.target.value };
                    });
                  }}
                />
              </Fieldset>
              <Fieldset>
                <Label htmlFor="roundInformation">Round Information</Label>
                <Input
                  id="roundInformation"
                  value={eventState.roundInformation}
                  onChange={(e) => {
                    setEventState((prevState) => {
                      return { ...prevState, roundInformation: e.target.value };
                    });
                  }}
                />
              </Fieldset>
              <Fieldset>
                <Label htmlFor="format">Format</Label>
                <Input
                  id="format"
                  value={eventState.format}
                  onChange={(e) => {
                    setEventState((prevState) => {
                      return { ...prevState, format: e.target.value };
                    });
                  }}
                />
              </Fieldset>
              <Flex css={{ marginTop: 25, justifyContent: "flex-end" }}>
                <DialogClose asChild>
                  <Button
                    aria-label="Close"
                    variant="violet"
                    type="submit"
                    onClick={(e) => {
                      changeEventData();
                    }}
                  >
                    Save changes
                  </Button>
                </DialogClose>
              </Flex>
            </form>
          )}
          <DialogClose asChild>
            <IconButton>
              <Cross2Icon />
            </IconButton>
          </DialogClose>
        </DialogContent>
      </Dialog>
    </Flex>
  );
};

export default EditPlayers;
