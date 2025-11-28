const express = require("express");
const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const fs = require("node:fs");
const path = require("node:path");
const morgan = require("morgan");

const app = express();

// Middlewares
app.use(express.json());
app.use(morgan("dev"))

// constants
const UserRecordFilePath = path.join(__dirname, "records", "UserRecords.txt");


// Api
app.get("/list-user", (req, res) => {
    fs.readFile(UserRecordFilePath, (error, data) => {
        if (error) {
            return res.status(StatusCodes.BAD_REQUEST).json({
                status: false,
                code: StatusCodes.BAD_REQUEST,
                message: ReasonPhrases.BAD_REQUEST,
            });
        }

        const dataReadable = data?.toString();
        const row = dataReadable?.split("\n") ?? [];
        let resArr = [];
        for (let i = 0; i < row.length; i++) {
            if (i !== row.length - 1) {
                const responseArr = row[i]?.split("<>");
                resArr?.push({
                    Name: responseArr[0],
                    Age: +responseArr[1]
                })
            }
        }

        return res.status(StatusCodes.OK).json({
            status: true,
            code: StatusCodes.OK,
            message: ReasonPhrases.OK,
            data: {
                saved: resArr,
            },
        });

    })
});

app.post("/add-user", (req, res) => {
    const payload = req.body;

    if (!payload?.Name || !payload?.Age) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            status: false,
            code: StatusCodes.BAD_REQUEST,
            message: ReasonPhrases.BAD_REQUEST,
        });
    }

    const line = `${payload.Name}<>${payload.Age}\n`;
    fs.appendFile(UserRecordFilePath, line, (error) => {
        if (error) {
            console.error("Error writing to file:", error);

            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                status: false,
                code: StatusCodes.INTERNAL_SERVER_ERROR,
                message: ReasonPhrases.INTERNAL_SERVER_ERROR,
                data: {
                    not_saved: {
                        Name: payload.Name,
                        Age: payload.Age,
                    },
                },
            });
        }

        return res.status(StatusCodes.OK).json({
            status: true,
            code: StatusCodes.OK,
            message: ReasonPhrases.OK,
            data: {
                saved: {
                    Name: payload.Name,
                    Age: payload.Age,
                },
            },
        });
    });
});

// Port Listener
app.listen(3000, () => {
    console.log("-----server is running-----");
});
