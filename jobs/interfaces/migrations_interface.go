// Copyright (c) 2018-present Mattermost, Inc. All Rights Reserved.
// See License.txt for license information.

package interfaces

import "github.com/c3systems/mattermost-server/model"

type MigrationsJobInterface interface {
	MakeWorker() model.Worker
	MakeScheduler() model.Scheduler
}
