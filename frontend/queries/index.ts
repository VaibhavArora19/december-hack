import { gql } from "urql";

export const streamSendQuery = gql`
  query streamSendQuery($sender: ID, $receiver: ID) {
    streams(
      where: {
        and: [
          { sender: $sender }
          { receiver: "0x738960bF1C2E54E8d3d9A54537e857E04d1f84b4" }
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
