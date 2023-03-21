import Box from "@/components/Box";

export default function Payment() {
  return (
    <div className="max-w-[30rem] mx-auto text-center leading-8">
      <Box reverse={true}>
        <div>
          You’re about to pay XXXXX $ Paid in : $TICKER From The Wallet :
        </div>
        <div>
          0x58z6f4z86fz474fz656fz4f45 Token will be sent to this adress :
        </div>
        <div>
          0x58z6f4z86fz474fz656fz4f45Average amount of token bought : XXXXXXXXX
        </div>
        <div>$CRUNH</div>
      </Box>
    </div>
  );
}
