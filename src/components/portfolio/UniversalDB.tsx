import React from "react";
import { Grid, Typography, makeStyles, Link } from "@material-ui/core";
import GreenBox from "components/common/GreenBox";
import architecture from "assets/universaldb-architecture.png";

const useStyles = makeStyles({
  root: {
    paddingTop: 20,
    paddingBottom: 30,
    maxWidth: 900,
    margin: "0 auto"
  },
  image: {
    width: "100%"
  },
  partialImage: {
    width: "70%",
    padding: "0 15%"
  },
  imageCaption: {
    display: "flex",
    justifyContent: "center"
  }
});

const UniversalDB: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.root} container justify="center">
      <Grid item xs={10}>
        <Typography variant="h3" gutterBottom>
          UniversalDB
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Ever since working for Google, I've been fascinated by distributed
          database management systems. One system has captivated me in
          particular: Google Spanner. Spanner advertises consistency guarantees
          that one would not think are possible with the data integrity
          guarantees that Spanner also provides. So I took it upon myself to
          learn as much as I could about it, and try building my own Distributed
          Database Management System (DDBMS) to learn a thing or two about large
          scale systems design.
          <br />
          <br />
          UniversalDB is a work-in-progress DDBMS that I've been developing
          since August 2019. You can find it on my Github,{" "}
          <Link
            href="https://github.com/pasindumuth/UniversalDB"
            color="secondary"
          >
            here
          </Link>
          . Here, I'll discuss all the important design decisions I make, and
          provide rigorous rationalization for them. I'll also write smaller
          articles for finer grained reasoning and I'll link them from here.
        </Typography>
        <br />
        <GreenBox>
          <Typography variant="body1">
            <strong>Accomplishments: </strong>
          </Typography>
          <Typography variant="body1" component="ul">
            <li>
              Wrote 7k+ of C++ code (measured from Github contributors page)
            </li>
            <li>
              Implemented the Multi-Paxos algorithm for distributed consensus
            </li>
            <li>
              Used Boost ASIO for asynchronous request handling and actor based
              concurrency
            </li>
            <li>
              Wrote integration tests by creating a simulated network layer with
              fault-injection to simulate the execution of multiple nodes, all
              in single UNIX process
            </li>
            <li>
              Wrote thorough unit tests for every non-IO class using GTest
            </li>
            <li>
              Employed professional C++ documentation practices with Doxygen
            </li>
            <li>Managed production deployment with Docker and Ansible</li>
          </Typography>
        </GreenBox>
        <br />
        <Typography variant="h5">Technologies Used</Typography>
        <Typography variant="body1" component="ul" color="textSecondary">
          <li> C++, Clang </li>
          <li> Boost ASIO </li>
          <li> GTest </li>
          <li> Docker </li>
          <li> Ansible </li>
        </Typography>
        <br />
        <br />
        <Typography variant="h4">High Level Design</Typography>
        <Typography variant="body1" color="textSecondary">
          We base much of our design on the design of Google Spanner. The main
          paper for Spanner can be found{" "}
          <Link
            href="https://static.googleusercontent.com/media/research.google.com/en//archive/spanner-osdi2012.pdf"
            color="secondary"
          >
            here
          </Link>
          .
        </Typography>
        <br />
        <img
          className={classes.partialImage}
          src={architecture}
          alt="Architecture"
        />
        <Typography
          className={classes.imageCaption}
          variant="body1"
          color="textSecondary"
          component="div" // We make this a div so we can use make this into a flexbox
        >
          Fig 1. Diagram of the servers in a single deployment of UniversalDB
        </Typography>
        <br />
        <br />
        <Typography variant="body1" color="textSecondary">
          One of the key algorithms in UniversalDB is the{" "}
          <strong>Multi-Paxos algorithm</strong>, used for maintaining
          consistency across replicated data. We have 2 types of servers, Data
          Masters and Slaves.
          <br />
          <br />
          The Slaves are partitioned into <i>n</i> sized groups, with each slave
          in a group being in a unique availability zone (an availability zone
          is a distinct geographic region where if a natural disaster were to
          take out a datacenter in that region, it's unlikely that another
          datacenter was also taken out in a different availability zone). Each
          partition of Slaves forms a Paxos group, meaning that those Slaves
          execute the Multi-Paxos algorithm to keep their data consistent with
          each other.
          <br />
          <br />
          There are exactly <i>n</i> Data Masters, each in its own availability
          zone. The Data Masters together form their own Paxos group.
        </Typography>
        <br />
        <Typography variant="h5">Tablets</Typography>
        <Typography variant="body1" color="textSecondary">
          The Slaves hold the user data in Tablets. A Slave generally has
          multiple Tablets. A Tablet holds key-value pairs, and a Tablet is
          identified by the 4-tuple{" "}
          <i>(database_id, table_id, start_key, end_key)</i>. As one would
          guess, the key-value pairs in each table in each database is
          partitioned across a set of Tablets. Tablets hold a contiguous
          partition of keys to facilitate range queries. A table is partitioned
          into multiple Tablets when the table starts to get too large to hold
          in a single Tablet (i.e. when the table is too large for a single
          Slave to hold all of its data).
        </Typography>
        <br />
        <Typography variant="h5">Data Master</Typography>
        <Typography variant="body1" color="textSecondary">
          The Data Masters are responsible for holding the metadata of the
          system. They keep track of which Slaves have which Tablets. This is
          necessary for the Data Masters to do their primary job, which is to
          help with the recovery when a Slave server fails. When this happens,
          the Data Master spins up a new Slave server and adds it to the Slave
          paxos group that just lost a server.
          <br />
          <br />
          The Data Master's second purpose is to be the first point of contact
          when a user wants to interact with the system. For instance, if the
          user wants to read data, they first contact the Data Masters (whose IP
          addresses are known). The Data Masters then respond with the IP
          address of the Slaves holding the requested data. After that point,
          the user can cache those IP addresses and interact with the Slave
          directly. The Slaves ensure that a user's cache isn't invalid by
          sending them an error if the user tries requesting a key that the
          Slave is (perhaps no longer) responsible for.
        </Typography>
        <br />
        <Typography variant="h5">Slave</Typography>
        <Typography variant="body1" color="textSecondary">
          The Slaves hold the user data, but they are also responsible for
          transaction processing and maintaining their memory, CPU, and disk
          resources.
          <br />
          <br />
          Slaves are always expecting heartbeats from other slaves in their
          paxos groups. If they detect that a member Slave went down, they
          inform the Data Masters so that the paxos group can recover. Slaves
          are also vigilant for when a Tablet starts to get so large that they
          have to partition it, sending one of those partitions to a different
          Slave (in another paxos group). A Slave informs the Data Master when
          this happens. The Slaves may also choose to partition tablets based on
          their CPU resources to optimize concurrency. (Each Tablet is managed
          by one thread. See{" "}
          <Link href="#concurrency" color="secondary">
            Concurrency
          </Link>{" "}
          for details). Thus, Slaves provide many hints about their metadata to
          the Data Masters, helping optimize the system.
        </Typography>
        <br />
        <br />
        <Typography variant="h4" id="concurrency">
          Concurrency
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Our main method of concurrency is to use actors and asynchronous
          message passing.
        </Typography>
        <br />
        <Typography variant="h5">Slave</Typography>
        <Typography variant="body1" color="textSecondary">
          A Slave has one thread for every CPU that it has.
        </Typography>
        <br />
        <Typography variant="h6">Tablet Thread</Typography>
        <Typography variant="body1" color="textSecondary">
          Each Tablet is managed by exactly one thread (a thread can handle
          multiple tablets). These threads are called the Tablet Threads, where
          data from a Tablet can only be read and written to by its
          corresponding Tablet Thread. This is the actor model of computing, and
          partitioning data like this so that only one thread can acccess any
          given piece prevents race conditions.
        </Typography>
        <br />
        <Typography variant="h6">Network Thread</Typography>
        <Typography variant="body1" color="textSecondary">
          One of the Slave threads don't manage any Tablets, and instead handles
          the Network. This is called the Network Thread. It's the interface
          between the Tablet Threads and the Network. It listens to incoming
          connections and messages, and places them into a queue to be handled
          by the correct Tablet Thread. The Network Thread is also responsible
          for taking the responses sent out by the Tablet Threads.
          <br />
          <br />
          The Network Thread uses Boost ASIO to asynchronously handle multiple
          connections, both listening to connection requests as well as sending
          and receiving data with existing connections.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default UniversalDB;
