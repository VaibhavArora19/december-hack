import { gql } from "urql";

export const streamSendQuery = gql`
  query streamSendQuery($sender: ID, $receiver: ID) {
    streams(
      where: {
        and: [
          { sender: $sender }
          { receiver: "0x72A3111fd452323Cf3c78710eb72747A4B2c2B08" }
        ]
      }
    ) {
      token {
        id
        name
        symbol
      }
      sender {
        id
      }
      currentFlowRate
      receiver {
        id
        accountTokenSnapshots {
          totalAmountStreamedInUntilUpdatedAt
        }
      }
      createdAtTimestamp
    }
  }
`;
